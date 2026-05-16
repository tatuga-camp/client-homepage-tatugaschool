import React from "react";
import Layout from "../layouts/HomepageLayout";
import SubscriptionPlan from "../components/payments/SubscriptionPlan";
import SEOHead from "../components/seo/SEOHead";
import { HomeDataLanguage } from "../data/languages/home";
import { useGetLanguage } from "../react-query";

function Index() {
  const language = useGetLanguage();
  return (
    <Layout>
      <SEOHead
        title={`${HomeDataLanguage.tatuga_school(language.data ?? "en")} — Pricing`}
        description={HomeDataLanguage.seo_description(language.data ?? "en")}
      />
      <div className="bg-white min-h-screen">
        <SubscriptionPlan />
      </div>
    </Layout>
  );
}

export default Index;
