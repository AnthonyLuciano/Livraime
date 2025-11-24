import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthContext } from "@/contexts/AuthContext";
import { useUpdateUser } from "@/hooks/tanstack-query/user/useUpdateUser";
import { EditUserFormData, editUserSchema } from "@/pages/admin/components/content/UserListComponent/edit-user.schema";
import { UserFromAPI } from "@/types/user.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "lucide-react";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

export function ProfileContent() {
  const { user, login } = useContext(AuthContext);
  const { mutate, isPending, isError, isSuccess, error } = useUpdateUser();

  const form = useForm<EditUserFormData>({
    resolver: zodResolver(editUserSchema),
    defaultValues: createEditFormData(user),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  useEffect(() => {
    if (user) {
      reset(createEditFormData(user));
    }
  }, [user, reset]);

  if (!user) return <p>Carregando...</p>;

  function onSubmit(data: EditUserFormData) {
    mutate(
      { id: user.id, data },
      {
        onSuccess: (updatedUser) => {
          login(updatedUser);
        },
      }
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Configurações do Perfil</CardTitle>
        <CardDescription>Gerencie suas informações pessoais e preferências</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-center text-muted-foreground">
            <User className="h-12 w-12 mx-auto mb-4" />
            <p>Área de gerenciamento de perfil.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl mx-auto">
            <div>
              <label className="block text-sm font-medium">Nome</label>
              <input {...register("name")} className="mt-1 block w-full rounded border px-2 py-1" />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium">Email</label>
              <input {...register("email")} className="mt-1 block w-full rounded border px-2 py-1" />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-sm font-medium">DDD</label>
                <input {...register("phone.areaCode")} className="mt-1 block w-full rounded border px-2 py-1" />
                {errors.phone?.areaCode && <p className="text-sm text-red-600 mt-1">{errors.phone.areaCode.message}</p>}
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium">Número</label>
                <input {...register("phone.number")} className="mt-1 block w-full rounded border px-2 py-1" />
                {errors.phone?.number && <p className="text-sm text-red-600 mt-1">{errors.phone.number.message}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Rua</label>
              <input {...register("address.street")} className="mt-1 block w-full rounded border px-2 py-1" />
              {errors.address?.street && <p className="text-sm text-red-600 mt-1">{errors.address.street.message}</p>}
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-sm font-medium">Número</label>
                <input {...register("address.number")} className="mt-1 block w-full rounded border px-2 py-1" />
                {errors.address?.number && <p className="text-sm text-red-600 mt-1">{errors.address.number.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium">Complemento</label>
                <input {...register("address.complement")} className="mt-1 block w-full rounded border px-2 py-1" />
                {errors.address?.complement && (
                  <p className="text-sm text-red-600 mt-1">{errors.address.complement.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">Bairro</label>
                <input {...register("address.neighborhood")} className="mt-1 block w-full rounded border px-2 py-1" />
                {errors.address?.neighborhood && (
                  <p className="text-sm text-red-600 mt-1">{errors.address.neighborhood.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div>
                <label className="block text-sm font-medium">Cidade</label>
                <input {...register("address.city")} className="mt-1 block w-full rounded border px-2 py-1" />
                {errors.address?.city && <p className="text-sm text-red-600 mt-1">{errors.address.city.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium">Estado (UF)</label>
                <input {...register("address.state")} className="mt-1 block w-full rounded border px-2 py-1" />
                {errors.address?.state && <p className="text-sm text-red-600 mt-1">{errors.address.state.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium">CEP</label>
                <input {...register("address.zipCode")} className="mt-1 block w-full rounded border px-2 py-1" />
                {errors.address?.zipCode && (
                  <p className="text-sm text-red-600 mt-1">{errors.address.zipCode.message}</p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                {isError && <p className="text-sm text-red-600">Erro: {error?.message ?? "Falha ao atualizar"}</p>}
                {isSuccess && <p className="text-sm text-green-600">Atualizado com sucesso.</p>}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
              >
                {isPending ? "Salvando..." : "Salvar"}
              </button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}

function createEditFormData(user?: UserFromAPI): EditUserFormData {
  if (!user) {
    return {
      name: "",
      email: "",
      phone: { areaCode: "", number: "" },
      address: {
        street: "",
        number: "",
        complement: "",
        neighborhood: "",
        city: "",
        state: "",
        zipCode: "",
      },
    };
  }

  return {
    name: user.nome || "",
    email: user.email || "",
    phone: {
      areaCode: user.telefone?.areaCode || "",
      number: user.telefone?.number || "",
    },
    address: {
      street: user.endereco?.street || "",
      number: user.endereco?.number || "",
      city: user.endereco?.city || "",
      state: user.endereco?.state || "",
      zipCode: user.endereco?.zipCode || "",
      neighborhood: user.endereco?.neighborhood || "",
      complement: user.endereco?.complement || "",
    },
  };
}
