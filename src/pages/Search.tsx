
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-4">
        <Button
          onClick={() => navigate("/search-module-1")}
          className="w-full py-6 text-lg"
        >
          Search Module 1
        </Button>
        <Button
          onClick={() => navigate("/search-module-2")}
          className="w-full py-6 text-lg"
        >
          Search Module 2
        </Button>
      </div>
    </Layout>
  );
};

export default Search;
