import { getMe } from "@/app/servers/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FiCalendar, FiCreditCard, FiMail, FiPhone, FiShield, FiUser } from "react-icons/fi";
import EditProfileSheet from "./EditProfileSheet";

export default async function ProfilePage() {
    const userRes = await getMe();
    const user = userRes?.data?.userInfo;

    if (!user) {
        return (
            <div className="p-8 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
                <p className="font-bold text-slate-500">System unable to load profile at this moment.</p>
            </div>
        );
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Header / Banner Section */}
            <div className="relative group">
                <div className="h-48 md:h-64 bg-linear-to-br from-indigo-600 via-blue-600 to-indigo-700 rounded-[40px] shadow-2xl relative overflow-hidden">
                    {/* Abstract Decorative Circles */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-size-[24px_24px]"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 md:px-12 -mt-20 md:-mt-24 relative z-10">
                    <div className="bg-white/90 backdrop-blur-2xl rounded-[40px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white p-6 md:p-10">
                        <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
                            <div className="relative group/avatar">
                                <Avatar className="h-32 w-32 md:h-44 md:w-44 border-8 border-white shadow-2xl ring-4 ring-indigo-50 overflow-hidden transform group-hover/avatar:scale-105 transition-all duration-500">
                                    <AvatarImage src={user.avatar || user.file} className="object-cover" />
                                    <AvatarFallback className="bg-linear-to-br from-indigo-600 to-blue-700 text-white text-4xl font-black">
                                        {user.name?.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="absolute bottom-2 right-2 w-8 h-8 bg-emerald-500 border-4 border-white rounded-full shadow-lg"></div>
                            </div>

                            <div className="flex-1 text-center md:text-left space-y-2 md:pb-4">
                                <div className="flex flex-col md:flex-row md:items-center gap-3">
                                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{user.name}</h1>
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-sm w-fit mx-auto md:mx-0 ${user.role === 'admin' ? 'bg-indigo-600 text-white' :
                                        user.role === 'agent' ? 'bg-purple-600 text-white' :
                                            'bg-blue-600 text-white'
                                        }`}>
                                        {user.role} Partner
                                    </span>
                                </div>
                                <p className="text-slate-500 font-bold flex items-center justify-center md:justify-start gap-2 italic">
                                    <FiShield className="text-emerald-500" /> Member since {new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                                </p>
                            </div>

                            <div className="md:pb-6">
                                <EditProfileSheet user={user} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="max-w-5xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
                {/* Left Column: Personal Info */}
                <Card className="lg:col-span-2 p-8 rounded-[40px] border-slate-100 shadow-xl shadow-slate-200/50 bg-white space-y-8">
                    <div>
                        <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                            <FiUser className="text-blue-600" />
                            Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <InfoItem icon={<FiMail />} label="Email Address" value={user.email} />
                            <InfoItem icon={<FiPhone />} label="Phone Number" value={user.phone} />
                            <InfoItem icon={<FiCreditCard />} label="Account ID" value={`#${user._id?.slice(-8).toUpperCase()}`} />
                            <InfoItem icon={<FiCalendar />} label="Registration" value={new Date(user.createdAt).toLocaleDateString()} />
                        </div>
                    </div>

                    <Separator className="bg-slate-50" />

                    <div>
                        <h3 className="text-xl font-black text-slate-900 mb-6">Wallet Status</h3>
                        <div className={`p-6 bg-emerald-50/50 rounded-3xl border ${user.wallet.status === 'active' ? 'border-emerald-100' : user.wallet.status === 'pending' ? 'border-yellow-100' : 'border-red-100'} flex items-center gap-6`}>
                            <div className={`w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm ${user.wallet.status === 'active' ? 'bg-emerald-100' : user.wallet.status === 'pending' ? 'bg-yellow-100' : 'bg-red-100'}`}>
                                <FiShield className={`text-3xl ${user.wallet.status === 'active' ? 'text-emerald-600' : user.wallet.status === 'pending' ? 'text-yellow-600' : 'text-red-600'}`} />
                            </div>
                            <div>
                                <p className={`font-black text-emerald-900 uppercase text-xs tracking-widest mb-1 ${user.wallet.status === 'active' ? 'text-emerald-900' : user.wallet.status === 'pending' ? 'text-yellow-900' : 'text-red-900'}`}>Status: {user.wallet.status}</p>
                                <p className={`text-emerald-700/70 text-sm font-bold ${user.wallet.status === 'active' ? 'text-emerald-700/70' : user.wallet.status === 'pending' ? 'text-yellow-700/70' : 'text-red-700/70'}`}>{user.wallet.status === 'active' ? 'Your account is fully secured and Active. You have access to all feature sets.' : user.wallet.status === 'pending' ? "Account need to be active to access all features" : 'Your account is blocked. Please contact support for assistance.'}</p>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Right Column: Wallet & Status */}
                <div className="space-y-8">
                    <Card className="p-8 rounded-[40px] bg-linear-to-br from-slate-900 to-slate-800 text-white border-0 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                            <FiCreditCard size={120} />
                        </div>
                        <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md mb-2">
                                <i className="fas fa-wallet text-2xl text-blue-400"></i>
                            </div>
                            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.25em]">Current Balance</p>
                            <h2 className="text-5xl font-black tracking-tighter">
                                <span className="text-blue-400">৳</span>{user.wallet.balance?.toLocaleString() || '0'}
                            </h2>
                            {/* <div className="pt-4 w-full">
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[85%] rounded-full shadow-[0_0_12px_rgba(59,130,246,0.5)]"></div>
                                </div>
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-2">Daily Limit Usage: 15%</p>
                            </div> */}
                        </div>
                    </Card>

                    <Card className="p-8 rounded-[40px] border-slate-100 shadow-xl bg-white">
                        <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6 px-1">Quick Actions</h4>
                        <div className="grid gap-3">
                            <QuickActionBtn label="View Transactions" icon="fa-list-ul" color="blue" />
                            <QuickActionBtn label="Privacy Settings" icon="fa-lock" color="slate" />
                            <QuickActionBtn label="Help Support" icon="fa-headset" color="indigo" />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}

function InfoItem({ icon, label, value }: { icon: any; label: string; value: string }) {
    return (
        <div className="space-y-2 p-3 rounded-2xl hover:bg-slate-50 transition-colors group">
            <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span className="group-hover:text-blue-600 transition-colors">{icon}</span>
                {label}
            </div>
            <p className="font-black text-slate-900 tracking-tight truncate">{value}</p>
        </div>
    );
}

function QuickActionBtn({ label, icon, color }: { label: string; icon: string; color: string }) {
    const colors: any = {
        blue: "bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white",
        slate: "bg-slate-50 text-slate-600 hover:bg-slate-800 hover:text-white",
        indigo: "bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white",
    };
    return (
        <button className={`flex items-center justify-between w-full p-4 rounded-2xl font-black text-sm transition-all duration-300 group ${colors[color]}`}>
            <span className="flex items-center gap-3">
                <i className={`fas ${icon} opacity-60`}></i>
                {label}
            </span>
            <i className="fas fa-arrow-right text-[10px] opacity-0 group-hover:opacity-100 transition-opacity"></i>
        </button>
    );
}
