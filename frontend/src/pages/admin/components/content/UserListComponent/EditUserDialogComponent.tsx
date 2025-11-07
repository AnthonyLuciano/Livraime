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
import { useDisableUser } from "@/hooks/tanstack/user/useDisableUser";
import { useToast } from "@/hooks/use-toast";
import { User } from "@/types/user.types";
import axios from "axios";
import { Settings, Trash2 } from "lucide-react";
import { useState } from "react";

interface EditUserDialogProps {
  user: User;
}

export default function EditUserDialogComponent({ user }: EditUserDialogProps) {
  const { toast } = useToast();
  const { mutate: deleteUser, error: deleteError } = useDisableUser();

  const [formData, setFormData] = useState({
    nome: user.name,
    email: user.contact.email,
    endereco: user.address,
    telefone: user.contact.phone,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    console.log("Salvar alterações:", formData);
    // Aqui você chamaria a API PUT/PATCH
  }

  function handleDisableUser() {
    deleteUser(user.id, {
      onSuccess: () => {
        toast({
          title: "Usuário desativado com sucesso",
          description: "O usuário foi desativado com sucesso.",
        });
      },
      onError: () => {
        toast({
          title: "Erro ao desativar usuário",
          description: `Ocorreu um erro ao desativar o usuário: ${
            axios.isAxiosError(deleteError) && deleteError.response.data
              ? deleteError.response.data
              : deleteError?.message ?? "Erro desconhecido"
          }`,
        });
      },
    });
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
          <DialogTitle>Editar Usuário</DialogTitle>
          <DialogDescription>Atualize as informações do usuário abaixo.</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Campos editáveis */}
          <div className="grid gap-2">
            <Label htmlFor="nome">
              Nome <span className="text-red-300">*</span>
            </Label>
            <Input id="nome" name="nome" value={formData.nome} onChange={handleChange} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">
              E-mail <span className="text-red-300">*</span>
            </Label>
            <Input id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="endereco">
              Endereço <span className="text-red-300">*</span>
            </Label>
            <Input id="endereco" name="endereco" value={formData.endereco} onChange={handleChange} />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="telefone">
              Telefone <span className="text-red-300">*</span>
            </Label>
            <Input id="telefone" name="telefone" value={formData.telefone} onChange={handleChange} />
          </div>

          {/* Campos somente leitura */}
          <div className="grid gap-2">
            <Label htmlFor="cpf">CPF</Label>
            <Input id="cpf" value={user.cpf} disabled className="bg-zinc-400" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="plano">Plano</Label>
            <Input id="plano" value={user.plan} disabled className="bg-zinc-400" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="dataCadastro">Data de Cadastro</Label>
            <Input
              id="dataCadastro"
              value={user.registerDate.toLocaleDateString("pt-BR")}
              disabled
              className="bg-zinc-400"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="ativo">Status</Label>
            <Input id="ativo" value={user.isActive ? "Ativo" : "Inativo"} disabled className="bg-zinc-400" />
          </div>
        </div>

        <DialogFooter className="flex justify-between items-center">
          {/* Popover de confirmação */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="destructive" size="sm">
                <Trash2 className="h-4 w-4 mr-2" /> Desativar Usuário
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <p className="text-sm mb-3">Tem certeza que deseja desativar este usuário?</p>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">
                  Cancelar
                </Button>
                <Button variant="destructive" size="sm" onClick={handleDisableUser}>
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
