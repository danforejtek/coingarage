import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function Page() {
  return (
    <div>
      <Breadcrumb className="mt-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/eezy-trader/knowledge-base">Knowledge base</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>General</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="py-12">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Introduction</TabsTrigger>
            <TabsTrigger value="password">Slang</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Overview</TabsContent>
          <TabsContent value="password"></TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
