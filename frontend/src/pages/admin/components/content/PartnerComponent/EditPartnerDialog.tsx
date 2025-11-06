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
import { Settings, Trash2 } from "lucide-react";
import { useState } from "react";

interface EditPartnerDialogProps {
  partner: Partner;
  onUpdate: (partner: Partner) => void;
}

export default function EditPartnerDialog({ partner, onUpdate }: EditPartnerDialogProps) {
  const [formData, setFormData] = useState({ ...partner });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    console.log("Salvar alterações:", formData);
    onUpdate(formData);
  }

  function handleDisable() {
    const updated = { ...formData, active: false };
    console.log("Parceiro desativado:", updated);
    onUpdate(updated);
  }

  return (
    <Dialog>
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
              //   onChange={handleChange}
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

        <DialogFooter className="flex justify-between">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="destructive" size="sm">
                <Trash2 className="h-4 w-4 mr-2" /> Desativar
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <p className="text-sm mb-3">Deseja realmente desativar este parceiro?</p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">
                  Cancelar
                </Button>
                <Button variant="destructive" size="sm" onClick={handleDisable}>
                  Confirmar
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Button onClick={handleSave}>Salvar Alterações</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
