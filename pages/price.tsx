import React from "react";
import Layout from "../layouts/HomepageLayout";
import SubscriptionPlan from "../components/payments/SubscriptionPlan";

function Index() {
  return (
    <Layout>
      <div className="bg-white min-h-screen">
        <SubscriptionPlan />
      </div>
    </Layout>
  );
}

export default Index;
