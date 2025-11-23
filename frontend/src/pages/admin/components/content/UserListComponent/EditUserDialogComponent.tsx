import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useDisableUser } from "@/hooks/tanstack-query/user/useDisableUser";
import { useEnableUser } from "@/hooks/tanstack-query/user/useEnableUser";
import { useToast } from "@/hooks/use-toast";
import { EditUserFormData, editUserSchema } from "@/pages/admin/components/content/UserListComponent/edit-user.schema";
import { UserFromAPI } from "@/types/user.types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { RefreshCw, Settings, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface EditUserDialogProps {
  user: UserFromAPI;
}

export default function EditUserDialogComponent({ user }: EditUserDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { mutate: deleteUser, error: deleteError } = useDisableUser();
  const { mutate: enableUser, error: enableError } = useEnableUser();

  const form = useForm<EditUserFormData>({
    resolver: zodResolver(editUserSchema),
    defaultValues: {
      name: user.nome,
      email: user.email,
      address: user.endereco,
      phone: user.telefone,
    },
  });

  function handleSave(data: EditUserFormData) {
    // TODO: Implementar a lógica de atualização do usuário
    console.log("Salvar alterações:", data);
  }

  function handleDisableUser() {
    deleteUser(user.id, {
      onSuccess: () => {
        toast({
          title: "Usuário desativado com sucesso",
          description: "O usuário foi desativado com sucesso.",
        });
        setIsOpen(false);
      },
      onError: () => {
        toast({
          title: "Erro ao desativar usuário",
          description: `Ocorreu um erro ao desativar o usuário: ${
            axios.isAxiosError(deleteError) && deleteError.response?.data
              ? deleteError.response.data
              : deleteError?.message ?? "Erro desconhecido"
          }`,
        });
      },
    });
  }

  function handleEnableUser() {
    enableUser(user.id, {
      onSuccess: () => {
        toast({
          title: "Usuário reativado com sucesso",
          description: "O usuário foi reativado com sucesso.",
        });
        setIsOpen(false);
      },
      onError: () => {
        toast({
          title: "Erro ao reativar usuário",
          description: `Ocorreu um erro ao reativar o usuário: ${
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

      <DialogContent className="max-w-xl overflow-hidden">
        <DialogHeader>
          <DialogTitle>Editar Usuário</DialogTitle>
          <DialogDescription>Atualize as informações abaixo</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSave)}>
            <Card className="border-none shadow-none">
              <CardContent className="max-h-[65vh] overflow-y-auto px-6 space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="address.street"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rua *</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address.number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número *</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address.complement"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Complemento</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address.neighborhood"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bairro *</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address.city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cidade *</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address.zipCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CEP *</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value ?? ""} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone.areaCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>DDD *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone.number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número *</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Somente leitura */}
                <div className="grid md:grid-cols-2 gap-4 pt-4 border-t">
                  <Input disabled value={user.cpf} />
                  <Input disabled value={user.plano ?? "Sem plano"} />
                  <Input disabled value={new Date(user.dataCadastro).toLocaleDateString("pt-BR")} />
                  <Input disabled value={user.ativo ? "Ativo" : "Inativo"} className="bg-muted" />
                </div>
              </CardContent>

              <DialogFooter className="flex justify-between items-center px-6 py-4 border-t">
                {user.ativo ? (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="destructive" size="sm" type="button">
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
                ) : (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        type="button"
                        className="text-green-600 border-green-600 hover:bg-green-50 hover:text-green-700"
                      >
                        <RefreshCw className="h-4 w-4 mr-2" /> Reativar Usuário
                      </Button>
                    </PopoverTrigger>

                    <PopoverContent className="w-64">
                      <p className="text-sm mb-3">Tem certeza que deseja reativar este usuário?</p>
                      <div className="flex justify-end space-x-2">
                        <Button variant="outline" size="sm">
                          Cancelar
                        </Button>
                        <Button
                          variant="default"
                          size="sm"
                          onClick={handleEnableUser}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Confirmar
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                )}

                <Button type="submit" className="bg-gradient-hero hover:opacity-90 shadow-button">
                  Salvar Alterações
                </Button>
              </DialogFooter>
            </Card>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
