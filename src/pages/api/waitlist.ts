import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    
    // Récupération des champs
    const email = data.get("email")?.toString();
    const nom = data.get("nom")?.toString();
    const prenom = data.get("prenom")?.toString();
    const pays = data.get("pays")?.toString();

    // 1. Validation basique
    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ message: "Email invalide." }),
        { status: 400 }
      );
    }
    
    // Validation optionnelle pour les autres champs
    if (!nom || !prenom || !pays) {
         return new Response(
        JSON.stringify({ message: "Veuillez remplir tous les champs." }),
        { status: 400 }
      );
    }

    // 2. Envoi vers Supabase
    // On insère l'objet complet
    const { error } = await supabase
      .from("waitlist")
      .insert({ 
          email, 
          nom, 
          prenom, 
          pays 
      });

    if (error) {
      // Si l'email existe déjà
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