import MandatoryAsterisk from "@/components/MandatoryAsterisk";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Partner } from "@/types/partner.types";
import { Settings, Trash2, Loader2, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";
import { useDisablePartner } from "@/hooks/tanstack-query/partner/useDisablePartner";
import { useEnablePartner } from "@/hooks/tanstack-query/partner/useEnablePartner";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";

interface EditPartnerDialogProps {
  partner: Partner;
  onUpdate: (partner: Partner) => void;
}

export default function EditPartnerDialog({ partner, onUpdate }: EditPartnerDialogProps) {
  const [formData, setFormData] = useState<Partner>({ ...partner });
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const { mutate: disablePartner, error: disableError, isPending: isDisabling } = useDisablePartner();
  const { mutate: enablePartner, error: enableError, isPending: isEnabling } = useEnablePartner();

  // Keep local formData in sync when parent `partner` prop changes
  useEffect(() => {
    setFormData({ ...partner });
  }, [partner]);

  // Accept change events from both input and textarea elements
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    // Currently we only update local state; backend update can be added later
    onUpdate(formData);
    setIsOpen(false);
  }

  function handleDisable() {
    if (!formData.id) return;
    disablePartner(formData.id, {
      onSuccess: () => {
        const updated = { ...formData, active: false };
        // update local state so UI toggles if dialog stays open
        setFormData(updated);
        toast({ title: "Parceiro desativado", description: "Parceiro desativado com sucesso." });
        onUpdate(updated);
        setIsOpen(false);
      },
      onError: () => {
        toast({
          title: "Erro ao desativar parceiro",
          description: `${
            axios.isAxiosError(disableError) && disableError.response?.data
              ? disableError.response.data
              : disableError?.message ?? "Erro desconhecido"
          }`,
        });
      },
    });
  }

  function handleEnable() {
    if (!formData.id) return;
    enablePartner(formData.id, {
      onSuccess: () => {
        const updated = { ...formData, active: true };
        // update local state so UI toggles if dialog stays open
        setFormData(updated);
        toast({ title: "Parceiro reativado", description: "Parceiro reativado com sucesso." });
        onUpdate(updated);
        setIsOpen(false);
      },
      onError: () => {
        toast({
          title: "Erro ao reativar parceiro",
          description: `${
            axios.isAxiosError(enableError) && enableError.response?.data
              ? enableError.response.data
              : enableError?.message ?? "Erro desconhecido"
          }`,
        });
      },
    });
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <Settings className="h-4 w-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Editar Parceiro</DialogTitle>
          <DialogDescription>Atualize as informações do parceiro abaixo.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="grid gap-2">
            <Label htmlFor="name">
              Nome <MandatoryAsterisk />
            </Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="serviceDescription">Descrição do Serviço</Label>
            <Textarea
              id="serviceDescription"
              name="serviceDescription"
              value={formData.serviceDescription}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">
              E-mail <MandatoryAsterisk />
            </Label>
            <Input
              id="email"
              name="contact.email"
              value={formData.contact.email}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  contact: { ...prev.contact, email: e.target.value },
                }))
              }
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">
              Telefone <MandatoryAsterisk />
            </Label>
            <Input
              id="phone"
              name="contact.phone"
              value={formData.contact.phone}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  contact: { ...prev.contact, phone: e.target.value },
                }))
              }
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="address">Endereço</Label>
            <Input id="address" name="address" value={formData.address} onChange={handleChange} />
          </div>
        </div>

        <DialogFooter className="flex justify-between items-center px-6 py-4 border-t">
          {formData.active ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="destructive" size="sm" type="button">
                  <Trash2 className="h-4 w-4 mr-2" /> Desativar Parceiro
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-64">
                <p className="text-sm mb-3">Deseja realmente desativar este parceiro?</p>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    Cancelar
                  </Button>
                  <Button variant="destructive" size="sm" onClick={handleDisable} disabled={isDisabling}>
                    {isDisabling && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Confirmar
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  type="button"
                  className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700"
                >
                  <RefreshCw className="h-4 w-4 mr-2" /> Reativar Parceiro
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-64">
                <p className="text-sm mb-3">Deseja realmente reativar este parceiro?</p>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" size="sm">
                    Cancelar
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handleEnable}
                    className="bg-green-600 hover:bg-green-700"
                    disabled={isEnabling}
                  >
                    {isEnabling && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Confirmar
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}

          <Button onClick={handleSave} className="bg-gradient-hero hover:opacity-90 shadow-button">
            Salvar Alterações
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
