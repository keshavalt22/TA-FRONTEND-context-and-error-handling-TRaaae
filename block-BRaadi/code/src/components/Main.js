import Location from "./Location";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import ErrorBoundary from "./errorBoundary/ErrorBoundary";
import ErrorBoundary1 from "./errorBoundary/ErrorBoundary1";
import ErrorBoundary2 from "./errorBoundary/ErrorBoundary2";

function Main() {
  return (
    <section id="section-one">
      <div className="grid">
        <ErrorBoundary>
          <Location />
        </ErrorBoundary>
        <ErrorBoundary1>
          <SectionOne />
        </ErrorBoundary1>
        <ErrorBoundary2>
          <SectionTwo />
        </ErrorBoundary2>
      </div>
    </section>
  );
}

export default Main;
