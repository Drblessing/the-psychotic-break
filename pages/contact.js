import styles from "../styles/Home.module.css";
import Head from "next/head";
import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import Contact from "../components/contactus";
// export default function Demo() {
//   const form = useForm({
//     initialValues: {
//       email: "",
//       termsOfService: false,
//     },

//     validate: {
//       email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
//     },
//   });

//   return (
//     <Box sx={{ maxWidth: 300 }} mx="auto">
//       <form onSubmit={form.onSubmit((values) => console.log(values))}>
//         <TextInput
//           required
//           label="Email"
//           placeholder="your@email.com"
//           {...form.getInputProps("email")}
//         />

//         <Checkbox
//           mt="md"
//           label="I agree to sell my privacy"
//           {...form.getInputProps("termsOfService", { type: "checkbox" })}
//         />

//         <Group position="right" mt="md">
//           <Button type="submit">Submit</Button>
//         </Group>
//       </form>
//     </Box>
//   );
// }

export default function Learn() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
      </Head>

      <main className={styles.main}>
        <Contact /> 
      </main>
    </div>
  );
}
