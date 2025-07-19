import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type FormInput = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<FormInput>({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const { submit: onSubmit } = useWeb3Forms({
    //it is a public key so it's fine hardcoding it here is fine
    access_key: "4dc3a4c2-706d-4a56-a1c8-af679a924e56",
    settings: {
      from_name: "My Portfolio-v1 website",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  useEffect(() => {
    if (!isSubmitSuccessful) return;

    const toastMessage =
      message ||
      (isSuccess
        ? "Success. Message sent successfully"
        : "Something went wrong. Please try later.");

    const toastFn = isSuccess ? toast.success : toast.error;

    toastFn(toastMessage);
  }, [isSubmitSuccessful, isSuccess]);

  return (
    <>
      <section className="pt-10 pb-40" id="contact">
        <div className="cont-max-width">
          <hr className="border-2" />
          <div className="cont-padding">
            <h1 className="section-header mb-6">Contact Me</h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex max-w-2xl flex-col gap-2"
            >
              <div className="input-cont">
                <div>
                  <input
                    id="full_name"
                    type="text"
                    className="peer"
                    placeholder=" "
                    autoComplete="false"
                    {...register("name", {
                      required: "Full name is required",
                      maxLength: 80,
                    })}
                  />
                  <label htmlFor="full_name">Full Name</label>
                </div>

                <div className="h-6">
                  <small>{errors.name?.message}</small>
                </div>
              </div>

              <div className="input-cont">
                <div>
                  <input
                    id="email_address"
                    type="email"
                    className="peer"
                    placeholder=" "
                    autoComplete="false"
                    {...register("email", {
                      required: "Enter your email",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  <label htmlFor="email_address">Email Address</label>
                </div>
                <div className="h-6">
                  <small>{errors.email?.message}</small>
                </div>
              </div>

              <div className="input-cont">
                <div>
                  <textarea
                    id="message"
                    className="peer max-h-60 min-h-14"
                    placeholder=" "
                    {...register("message", {
                      required: "Enter your Message",
                    })}
                  />
                  <label htmlFor="message">Your Message</label>
                </div>
                <div className="h-6">
                  <small>{errors.message?.message}</small>
                </div>
              </div>

              <button
                disabled={isSubmitting}
                name="submit message"
                type="submit"
                className="group w-fit cursor-pointer rounded-sm border-1 border-black px-6 py-3 transition-colors hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
              >
                {isSubmitting ? (
                  //loading icon
                  <svg
                    className="mx-auto h-5 w-5 animate-spin text-black transition-colors group-hover:text-white dark:text-white dark:group-hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
