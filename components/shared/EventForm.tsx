'use client';
import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { eventFormSchema } from '@/lib/validator';
import * as z from 'zod';
import DropDown from './DropDown';

type EventFormProps = {
	userId: string;
	type: 'Create' | 'Update';
};

const EventForm = ({ userId, type }: EventFormProps) => {
	const initialValues = {
		title: '',
		description: '',
		location: '',
		imageUrl: '',
		startDateTime: new Date(),
		endDateTime: new Date(),
		categoryId: '',
		price: 0,
		isFree: false,
		url: '',
	};

	const form = useForm<z.infer<typeof eventFormSchema>>({
		resolver: zodResolver(eventFormSchema),
		defaultValues: initialValues,
	});

	function onSubmit(values: z.infer<typeof eventFormSchema>) {
		console.log(values);
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='flex flex-col gap-5'
			>
				<div className='flex flex-col gap-5 md:flex-row'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormControl>
									<Input
										placeholder='Event Title'
										{...field}
										className='input-field'
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='categoryId'
						render={({ field }) => (
							<FormItem className='w-full'>
								<FormControl>
                  <DropDown
                    onChangeHandler={field.onChange} value={field.value}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
};

export default EventForm;
