// @ts-ignore
import { PortalWithState } from "react-portal";
import { layout, content } from "@/components/portal/portal.css";
import { RemoveScroll } from "react-remove-scroll";
import { memo } from "react";

// eslint-disable-next-line react/display-name
const Portal = memo(({ openComponent: Button, render: Component }: any) => {
  return (
    <PortalWithState closeOnOutsideClick closeOnEsc>
      {({ openPortal, closePortal, isOpen, portal }: any) => (
        <RemoveScroll enabled={isOpen}>
          <Button onClick={openPortal} />
          {portal(
            <>
              <div className={content}>
                <Component onClose={closePortal} />
              </div>
              <div className={`${layout}`} onClick={closePortal}></div>
            </>
          )}
        </RemoveScroll>
      )}
    </PortalWithState>
  );
});

export default Portal;
