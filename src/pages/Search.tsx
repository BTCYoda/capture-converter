
import Layout from "@/components/Layout";
import SearchModuleOne from "@/components/SearchModuleOne";
import SearchModuleTwo from "@/components/SearchModuleTwo";

const Search = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <SearchModuleOne />
        <SearchModuleTwo />
      </div>
    </Layout>
  );
};

export default Search;
