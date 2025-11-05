import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import TotalCustomerSpend from '@/app/ui/dashboard/total-customer-spend';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData, fetchCustomerSpend } from '@/app/lib/data';
import { Suspense } from 'react';
import CardWrapper from '@/app/ui/dashboard/cards';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton, CustomerSpendSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
    // const revenue = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices(); // waits for fetchRevenue() to finish before running
    const cardData = await fetchCardData(); // waits for latestInvoices() to finish before running
    // const totalSpend = await fetchCustomerSpend();

    return (
        <main>
            <h1 className={`${lusitana.className} mv-4 text-xl md:text-2x1`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {/* {<Card title="Collected" value={cardData.totalPaidInvoices} type="collected" />}
                {<Card title="Pending" value={cardData.totalPendingInvoices} type="pending" />}
                {<Card title="Total Invoiced" value={cardData.numberOfInvoices} type="invoices" />}
                {<Card title="Total Customers" value={cardData.numberOfCustomers} type="customers" />} */}
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid, grid-cols-1 md:grid-cols-4 lg:grid-cols-8">
                {/* {<TotalCustomerSpend totalSpend={totalSpend} />} */}
                <Suspense fallback={<CustomerSpendSkeleton />}>
                    <TotalCustomerSpend />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/* {<RevenueChart revenue={revenue} />} */}
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
                {/* {<LatestInvoices latestInvoices={latestInvoices} />} */}
            </div>
        </main>
    );
}