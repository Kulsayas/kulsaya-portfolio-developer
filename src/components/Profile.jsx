import ContactLink from "./ContactLink";

export default function Profile() {
  return (
    <div className="">
      <div className="h-[200px] relative xl:h-[300px]">
        <img
          className="rounded-lg w-[120px] absolute top-20 right-12 md:top-20 md:right-60 xl:w-[200px] xl:left-[50%]"
          src="https://images.unsplash.com/photo-1731334725894-4dd2800b5d97?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image profile"
        />
      </div>
      <div>
        <div className="flex flex-col items-start leading-8 md:flex md:flex-col md:items-center">
          <div>
            <p className="text-[30px] font-bold text-left md:text-[52px] md:pb-5 xl:text-[72px] xl:pb-10">
              Hello !
            </p>
            <p className="text-[30px] font-bold text-left md:text-[52px] md:pb-2 xl:text-[72px] xl:pb-8">
              I’m Kulsaya Seenual
            </p>
            <p className="text-[14px] text-left xl:text-[20px]">
              Passionate as a Junior Software Developer.
            </p>
            <div className="pt-2">
              <ContactLink />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
