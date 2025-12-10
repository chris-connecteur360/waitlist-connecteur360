export const prerender = false;

import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const email = data.get("email")?.toString();

    // 1. Validation basique
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ message: "Email invalide." }),
        { status: 400 }
      );
    }

    // 2. Envoi vers Supabase
    const { error } = await supabase
      .from("waitlist")
      .insert({ email });

    if (error) {
      // Si l'email existe déjà (code 23505 est souvent utilisé pour 'unique violation')
      if (error.code === '23505') {
         return new Response(
          JSON.stringify({ message: "Cet email est déjà inscrit !" }),
          { status: 409 }
        );
      }
      throw error;
    }

    // 3. Succès
    return new Response(
      JSON.stringify({ message: "Succès ! Vous êtes sur la liste." }),
      { status: 200 }
    );

  } catch (e) {
    console.error("ERREUR SUPABASE / API :", e);

    return new Response(
      JSON.stringify({ message: "Une erreur est survenue." }),
      { status: 500 }
    );
  }
};