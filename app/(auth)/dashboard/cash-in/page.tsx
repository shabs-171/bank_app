import { getMe } from "@/app/servers/user";
import MotionWrapper from "@/components/MotionWrapper";
import UnauthorizedPage from "@/components/UnauthorizedPage";
import Form from "./Form";
import Header from "./Header";

export default async function CashInPage() {


    const profileFetch = await getMe();
    const role = profileFetch.data?.userInfo?.role;

    if (role !== "agent") {
        return <UnauthorizedPage />;
    }




    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-blue-50 flex items-center justify-center p-4">
            {/* Decorative Blobs */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>

            <MotionWrapper
                className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
            >
                <Header />
                <div className="p-8">
                    <Form />
                </div>
            </MotionWrapper>
        </div>
    );
}

