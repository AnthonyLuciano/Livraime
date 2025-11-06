import AdminHeader from "./components/AdminPageHeader";
import AdminPageContent from "./components/content/AdminPageContent";

const AdminPage = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <AdminHeader />
        <AdminPageContent />
      </div>
    </div>
  );
};

export default AdminPage;
