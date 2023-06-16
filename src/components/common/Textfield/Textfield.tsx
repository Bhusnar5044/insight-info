import { theme } from '@theme';
import { FC, forwardRef, memo, useCallback, useState } from 'react';
import { Text } from '..';
import { Input, InputWrapper, Label, Wrapper } from './styled';
import { Props } from './types';

export const Textfield: FC<Props> = memo(
    forwardRef<HTMLInputElement, Props>(({ label, minWidth, fullWidth, errorText, validator, ...props }, ref) => {
        const [isValid, setIsValid] = useState(true);
        const [error, setError] = useState('');
        const onBlur = useCallback(() => {
            const error = validator?.(props.value, props.required) || '';
            setIsValid(!error);
            setError(error);
        }, [props.required, props.value, validator]);

        return (
            <Wrapper flexDirection="column" gap="0.5rem" {...{ minWidth, fullWidth }}>
                <InputWrapper for="inp" {...{ minWidth, fullWidth, errorText, isValid }}>
                    <Input ref={ref} type="text" id="inp" placeholder="&nbsp;" {...props} onBlur={onBlur} />
                    <Label>{label}</Label>
                    <span className="focus-bg"></span>
                </InputWrapper>
                {errorText ||
                    (error && (
                        <Text textVariant="body3" textColor={theme.colors.error.light}>
                            {errorText || error}
                        </Text>
                    ))}
            </Wrapper>
        );
    }),
);

Textfield.displayName = 'Textfield';
