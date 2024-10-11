import CardWrapper from "./card-wrapper";

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong."
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <></>
    </CardWrapper>
  );
}
