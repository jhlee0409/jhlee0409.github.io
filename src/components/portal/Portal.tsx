// @ts-ignore
import { PortalWithState } from "react-portal";
import { layout, content } from "@/components/portal/portal.css";
const Portal = ({ button, children }: any) => {
  return (
    <PortalWithState closeOnOutsideClick closeOnEsc>
      {({ openPortal, closePortal, isOpen, portal }: any) => (
        <>
          <button onClick={openPortal}>{button}</button>
          {portal(
            <>
              <div className={content}>{children}</div>
              <div className={`${layout}`} onClick={closePortal}></div>
            </>
          )}
        </>
      )}
    </PortalWithState>
  );
};

export default Portal;
