"use client";

import { updateMe } from "@/app/servers/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiCamera, FiEdit2, FiMail, FiPhone, FiUser } from "react-icons/fi";
import { toast } from "sonner";
import * as z from "zod";

const editProfileSchema = z.object({
    name: z.string().min(4, "Name must be at least 4 characters"),
    email: z.email("Invalid email address"),
    phone: z.string().regex(/^01[3-9]\d{8}$/, "Invalid phone format"),
    id: z.string(),
});

type EditProfileValues = z.infer<typeof editProfileSchema>;

export default function EditProfileSheet({ user }: { user: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imagePreview, setImagePreview] = useState<string | null>(user.avatar || user.file);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const router = useRouter();

    const { register, handleSubmit, formState: { errors } } = useForm<EditProfileValues>({
        resolver: zodResolver(editProfileSchema),
        defaultValues: {
            name: user.name,
            email: user.email,
            phone: user.phone,
            id: user._id || user.id,
        },
    });

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async (data: EditProfileValues) => {
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append("id", data.id);
            formData.append("name", data.name);
            formData.append("email", data.email);
            formData.append("phone", data.phone);
            if (selectedFile) {
                formData.append("file", selectedFile);
            }

            const res = await updateMe(formData);
            if (res.success) {
                toast.success("Profile updated successfully!");
                setIsOpen(false);
                router.refresh();
            } else {
                toast.error(res.message || "Update failed");
            }
        } catch (error) {
            toast.error("An error occurred during update");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" className="rounded-xl border-blue-200 text-blue-600 hover:bg-blue-50 font-bold flex items-center gap-2">
                    <FiEdit2 />
                    Edit Profile
                </Button>
            </SheetTrigger>
            <SheetContent className="sm:max-w-md bg-white border-l-0 rounded-l-2xl px-4">
                <SheetHeader className="text-left mb-8">
                    <SheetTitle className="text-2xl font-black text-slate-900">Edit Profile</SheetTitle>
                    <SheetDescription className="text-slate-500 font-medium italic">
                        Update your personal information and profile picture.
                    </SheetDescription>
                </SheetHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Avatar Upload */}
                    <div className="flex flex-col items-center mb-8">
                        <div className="relative group">
                            <Avatar className="h-28 w-28 border-4 border-white shadow-2xl ring-4 ring-blue-50">
                                <AvatarImage src={imagePreview || ""} />
                                <AvatarFallback className="bg-linear-to-br from-blue-600 to-indigo-700 text-white text-3xl font-black">
                                    {user.name?.charAt(0)}
                                </AvatarFallback>
                            </Avatar>
                            <label className="absolute bottom-1 right-1 w-10 h-10 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg cursor-pointer hover:bg-blue-700 transition-all border-4 border-white group-hover:scale-110">
                                <FiCamera size={18} />
                                <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                            </label>
                        </div>
                        <p className="mt-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Change Photo</p>
                    </div>

                    <div className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                            <div className="relative">
                                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    {...register("name")}
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:bg-white outline-none transition-all font-bold text-slate-900 border-b-2 focus:border-b-blue-500"
                                />
                            </div>
                            {errors.name && <p className="text-[10px] text-rose-500 font-bold ml-2">{errors.name.message}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                            <div className="relative">
                                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    {...register("email")}
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:bg-white outline-none transition-all font-bold text-slate-900 border-b-2 focus:border-b-blue-500"
                                />
                            </div>
                            {errors.email && <p className="text-[10px] text-rose-500 font-bold ml-2">{errors.email.message}</p>}
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                            <div className="relative">
                                <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    {...register("phone")}
                                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:bg-white outline-none transition-all font-bold text-slate-900 border-b-2 focus:border-b-blue-500"
                                />
                            </div>
                            {errors.phone && <p className="text-[10px] text-rose-500 font-bold ml-2">{errors.phone.message}</p>}
                        </div>
                    </div>

                    <div className="pt-6">
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-7 rounded-3xl bg-linear-to-r from-blue-600 to-indigo-700 text-white font-black text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
                        >
                            {isSubmitting ? (
                                <div className="flex items-center gap-2">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    Updating...
                                </div>
                            ) : "Save Changes"}
                        </Button>
                    </div>
                </form>
            </SheetContent>
        </Sheet>
    );
}
