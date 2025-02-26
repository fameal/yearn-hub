import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';
import { getVaults } from '../../../utils/vaults';
import { VaultsList } from '../../common/VaultsList';
import { Vault } from '../../../types';

export const Home = () => {
    const [vaults, setVaults] = useState<Vault[]>([]);
    const [isLoaded, setIsLoaded] = useState(true);
    useEffect(() => {
        getVaults().then((loadedVaults) => {
            if (loadedVaults.length > 0) {
                setVaults(loadedVaults);
                setIsLoaded(false);
            }
        });
    }, []);

    return (
        <div>
            {isLoaded ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: '100px',
                    }}
                >
                    <CircularProgress style={{ color: '#fff' }} />
                    <Typography style={{ color: '#fff' }}>
                        Loading vaults..
                    </Typography>
                </div>
            ) : (
                <VaultsList items={vaults} />
            )}
        </div>
    );
};
