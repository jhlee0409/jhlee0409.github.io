// @ts-ignore
import { PortalWithState } from "react-portal";
import { layout, content } from "@/components/portal/portal.css";
import { useEffect } from "react";
import { RemoveScroll } from "react-remove-scroll";
const Portal = ({ button, children }: any) => {
  return (
    <PortalWithState closeOnOutsideClick closeOnEsc>
      {({ openPortal, closePortal, isOpen, portal }: any) => (
        <RemoveScroll enabled={isOpen}>
          <button onClick={openPortal}>{button}</button>
          {portal(
            <>
              <div className={content}>{children}</div>
              <div className={`${layout}`} onClick={closePortal}></div>
            </>
          )}
        </RemoveScroll>
      )}
    </PortalWithState>
  );
};

export default Portal;
