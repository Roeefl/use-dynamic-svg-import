import React, { useEffect, useRef, useState } from 'react';

type TParams = {
  folder?: string;
  name: string;
};

export function useDynamicSvgImport({ folder = 'assets', name }: TParams) {
  const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    setIsLoading(true);

    // dynamically import the mentioned svg icon name in props
    const importSvgIcon = async (): Promise<void> => {
      // please make sure all your svg icons are placed in the same directory
      // if we want that part to be configurable then instead of iconName we will send iconPath as prop
      try {
        importedIconRef.current = (await import(`./${folder}/${name}.svg`))?.ReactComponent; // svgr provides ReactComponent for given svg path
      } catch (err) {
        setError(err);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    importSvgIcon();
  }, [name]);

  return {
    error,
    isLoading,
    SvgIcon: importedIconRef?.current
  };
}

export default useDynamicSvgImport;
