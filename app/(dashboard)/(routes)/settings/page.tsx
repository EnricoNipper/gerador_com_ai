import React from "react";
import { Settings } from "lucide-react";

import Heading from "@/components/heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export default async function SettingsPage() {
  // ... (sua lógica para buscar dados do usuário)

  return (
    <div>
      {/* Renderiza o componente Heading com informações sobre a página */}
      <Heading
        title="Settings"
        description="Manage Account Settings."
        icon={Settings}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        {/* Renderiza as informações do usuário */}
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground text-sm">
              {/* Exibe o nome do usuário */}
              <CardDescription>Username: {/* ... (nome do usuário) */}</CardDescription>
              {/* Exibe o email do usuário */}
              <CardDescription>Email: {/* ... (email do usuário) */}</CardDescription>
            </div>
          </CardContent>
        </Card>
        {/* Renderiza as configurações da conta */}
        <div className="space-y-4">
          {/* Formulário para atualizar o nome de usuário */}
          <Card>
            <CardHeader>
              <CardTitle>Username</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                {/* Campo de entrada para o novo nome de usuário */}
                <div className="flex items-center gap-x-4">
                  <Label htmlFor="username">New Username</Label>
                  <Input id="username" type="text" placeholder="New Username" />
                </div>
                {/* Botão para salvar o novo nome de usuário */}
                <Button type="submit" className="mt-4">
                  Save
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* Formulário para atualizar a senha */}
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                {/* Campo de entrada para a senha atual */}
                <div className="flex items-center gap-x-4">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    placeholder="Current Password"
                  />
                </div>
                {/* Campo de entrada para a nova senha */}
                <div className="flex items-center gap-x-4 mt-4">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="New Password"
                  />
                </div>
                {/* Campo de entrada para confirmar a nova senha */}
                <div className="flex items-center gap-x-4 mt-4">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm New Password"
                  />
                </div>
                {/* Botão para salvar a nova senha */}
                <Button type="submit" className="mt-4">
                  Save
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* Formulário para atualizar o email */}
          <Card>
            <CardHeader>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                {/* Campo de entrada para o novo email */}
                <div className="flex items-center gap-x-4">
                  <Label htmlFor="email">New Email</Label>
                  <Input id="email" type="email" placeholder="New Email" />
                </div>
                {/* Botão para salvar o novo email */}
                <Button type="submit" className="mt-4">
                  Save
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* Formulário para atualizar o tema */}
          <Card>
            <CardHeader>
              <CardTitle>Theme</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <Select defaultValue="light">
                    <SelectTrigger>
                      <SelectValue defaultValue="light" />
                    </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
                <Button type="submit" className="mt-4">
                  Save
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
