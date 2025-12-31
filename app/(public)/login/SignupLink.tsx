import Link from "next/link";

export default function SignupLink() {
    return (
        <p className="text-center mt-8 text-gray-600">
            Don’t have an account?{" "}
            <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-800">
                Register
            </Link>
        </p>
    );
}
