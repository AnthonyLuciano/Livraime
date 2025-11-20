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

function formatPhone(value: string) {

  const digits = value.replace(/\D/g, '').slice(0, 11); //Regex para aceitar apenas números
  //Máscara do padrão "(11) 01234-5678"
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7)
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

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

  const [emailError, setEmailError] = useState<string | null>(null);

  function validateEmail(email: string) {
    //Regex de email
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  const [open, setOpen] = useState(false); //Fecha o dialog após clicar em "CADASTRAR"

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    const newPartner: Partner = { ...formData, id: Date.now() };
    onCreate(newPartner);
    setOpen(false); //Fecha o dialog após clicar em "CADASTRAR"
  }

  return (
    
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" onClick={() => setOpen(true)}>
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
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                serviceDescription: e.target.value,
              }))
            }
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
              onChange={(e) => {
                const value = e.target.value;
                setFormData((prev) => ({
                  ...prev,
                  contact: { ...prev.contact, email: value },
                }));
                setEmailError(null); // Retira mensagem de erro enquanto digita
              }}
              onBlur={(e) => {
                const value = e.target.value.trim().toLowerCase();
                setFormData((prev) => ({
                  ...prev,
                  contact: { ...prev.contact, email: value },
                }));
                if (!validateEmail(value)) {
                  setEmailError("E-mail inválido");
                }
              }}
              type="email"
              autoComplete="email"
            />
            {emailError && ( //Se o email for inválido, aparece um erro. Caso for válido, não aparece nada (fica implícito)
              <span style={{ color: "red", fontSize: 12 }}>{emailError}</span>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="phone">
              Telefone <MandatoryAsterisk />
            </Label>
            <Input
              id="phone"
              name="contact.phone"
              value={formData.contact.phone}
              inputMode="numeric"
              pattern="[0-9]*" //Significa: "0 ou mais digitos" para ser consideraddo válido
              maxLength={16} // Contabiliza desde os sinais até os números
              onChange={(e) => {
                const formatted = formatPhone(e.target.value);
                setFormData((prev) => ({
                  ...prev,
                  contact: { ...prev.contact, phone: formatted },
                }));
              }}
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
