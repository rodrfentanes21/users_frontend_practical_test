import type { Config } from 'jest';

const config: Config = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/test/setup.ts'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(t|j)sx?$': [
            '@swc/jest',
            {
                jsc: {
                    parser: {
                        syntax: 'typescript',
                        tsx: true,
                    },
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
                    },
                },
            },
        ],
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        '/node_modules/(?!(@testing-library/react|@testing-library/jest-dom)/)',
    ],
    rootDir: '.',
    modulePaths: ['<rootDir>/src'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts', '!src/test/**/*'],
};

export default config;
