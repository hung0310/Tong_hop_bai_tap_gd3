import { useState, useCallback } from 'react';
import { Sidebar } from 'primereact/sidebar';

const useSidebar = () => {
    const [visible, setVisible] = useState(false);
    const [pos, setPos] = useState('left');
    const [fullscr, setFullScr] = useState(false);
    const [head, setHead] = useState(null);
    const [ico, setIco] = useState(null);
    const show = useCallback(() => setVisible(true), []);
    const hide = useCallback(() => setVisible(false), []);

    const setPosition = useCallback((position) => {
        setPos(position);
    }, []);

    const setFullScreen = useCallback((scr) => {
        setFullScr(scr);
    }, []);

    const setHeader = useCallback((header) => {
        setHead(header);
    }, []);
    
    const setIcon = useCallback((icon) => {
        setIco(icon);
    }, []);

    const SidebarComponent = ({ children, ...props }) => {
        return (
            <Sidebar header={head} visible={visible} position={pos} fullScreen={fullscr} onHide={hide} icons={ico} {...props}>
                {children}
            </Sidebar>
        );
    };

    return [SidebarComponent, show, setPosition, setFullScreen, setHeader, setIcon];
};

export default useSidebar;