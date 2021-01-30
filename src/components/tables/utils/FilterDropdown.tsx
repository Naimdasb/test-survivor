import React from 'react';

import { Input, Button, Space } from 'antd';

type filterDropdown = {
    setSelectedKeys: (selectedKeys: string[]) => void;
    selectedKeys: string[];
    confirm: () => void;
    clearFilters: () => void;
};

export const filterDropdown = ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
}: filterDropdown) => {
    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSelectedKeys(e.currentTarget.value ? [e.currentTarget.value] : []);
    };

    return (
        <div style={{ padding: 16 }}>
            <Input
                placeholder="Search..."
                value={selectedKeys[0]}
                onChange={handleChange}
                onPressEnter={confirm}
                style={{ width: 250, marginBottom: 8, display: 'block' }}
            />
            <Space>
                <Button
                    type="primary"
                    onClick={confirm}
                    size="small"
                    style={{ width: 90 }}
                >
                    Search
        </Button>
                <Button onClick={clearFilters} size="small" style={{ width: 90 }}>
                    Reset
        </Button>
            </Space>
        </div>
    );
};
