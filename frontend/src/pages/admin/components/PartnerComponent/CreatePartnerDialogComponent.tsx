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
import { Textarea } from "@/components/ui/textarea";
import { Partner } from "@/types/partner.types";
import { Plus } from "lucide-react";
import { useState } from "react";

interface CreatePartnerDialogProps {
  onCreate: (partner: Partner) => void;
}

export default function CreatePartnerDialogComponent({ onCreate }: CreatePartnerDialogProps) {
  const [formData, setFormData] = useState<Omit<Partner, "id">>({
    name: "",
    type: "sebo",
    serviceDescription: "",
    contact: { email: "", phone: "" },
    address: "",
    active: true,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    const newPartner: Partner = { ...formData, id: Date.now() };
    onCreate(newPartner);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <Plus className="h-4 w-4 mr-2" /> Novo Parceiro
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Cadastrar Novo Parceiro</DialogTitle>
          <DialogDescription>Insira as informações abaixo para cadastrar um novo parceiro.</DialogDescription>
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

        <DialogFooter>
          <Button onClick={handleSave}>Cadastrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
