"use client";
import Button from "@/components/ui/Button/Button";
import Avatar from "@/components/ui/Avatar/Avatar";

export default function Preview() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'flex-start' }}>
      <section>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Typography & Theme Showcase</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', maxWidth: '600px', marginBottom: '2rem' }}>
          This page demonstrates our custom theme with beautiful typography pairing. Headings use the elegant Playfair Display serif font, while body text uses the clean and modern Rubik sans-serif font.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Design System Colors</h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', maxWidth: '500px' }}>
          Our theme features a purple primary color with carefully chosen complementary colors for success, warning, and danger states. The system automatically adapts between light and dark modes.
        </p>
      </section>

      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Interactive Components</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Our button components showcase the theme colors in action with hover effects and focus states.
        </p>
      
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button variant="primary" onClick={() => console.log('Primary clicked')}>
          Primary Button
        </Button>
        
        <Button variant="secondary" onClick={() => console.log('Secondary clicked')}>
          Secondary Button
        </Button>
        
        <Button variant="success" onClick={() => console.log('Success clicked')}>
          Success Button
        </Button>
        
        <Button variant="warning" onClick={() => console.log('Warning clicked')}>
          Warning Button
        </Button>
        
        <Button variant="danger" onClick={() => console.log('Danger clicked')}>
          Danger Button
        </Button>
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Disabled States</h3>
      <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
        All button variants maintain consistent styling when disabled, with reduced opacity for clear visual feedback.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <Button variant="primary" disabled>
          Primary Disabled
        </Button>
        
        <Button variant="secondary" disabled>
          Secondary Disabled
        </Button>
        
        <Button variant="success" disabled>
          Success Disabled
        </Button>
        
        <Button variant="warning" disabled>
          Warning Disabled
        </Button>
        
        <Button variant="danger" disabled>
          Danger Disabled
        </Button>
      </div>

      <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Practical Examples</h3>
      <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
        Real-world button implementations showing different types and interactive behaviors.
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Button variant="primary" type="submit">
          Submit Form
        </Button>
        
        <Button variant="secondary" type="reset">
          Reset Form
        </Button>
        
        <Button variant="success" onClick={() => alert('Changes saved!')}>
          Save Changes
        </Button>
        
        <Button variant="warning" onClick={() => confirm('Are you sure you want to proceed?')}>
          Proceed with Caution
        </Button>
        
        <Button variant="danger" onClick={() => confirm('This action cannot be undone. Continue?')}>
          Delete Account
        </Button>
      </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Avatar Component</h2>
        <p style={{ marginBottom: '1.5rem', maxWidth: '500px' }}>
          Avatar components display user initials with a gradient background. Available in three sizes: small, medium, and large.
        </p>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Different Sizes</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Avatars adapt to different contexts with small (32px), medium (48px), and large (64px) variants.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Avatar name="Alice" size="sm" />
            <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Small</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Avatar name="Bob" size="md" />
            <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Medium</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <Avatar name="Charlie" size="lg" />
            <span style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>Large</span>
          </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Example Users</h3>
        <p style={{ marginBottom: '1rem', maxWidth: '400px' }}>
          Avatars automatically extract and display the first initial from any name.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Avatar name="Sarah Johnson" />
            <span>Sarah Johnson</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Avatar name="Michael Chen" />
            <span>Michael Chen</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Avatar name="Emma Davis" />
            <span>Emma Davis</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Avatar name="David Wilson" />
            <span>David Wilson</span>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Typography Hierarchy</h2>
        <div style={{ maxWidth: '700px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Main Heading (H1)</h1>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Section Heading (H2)</h2>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Subsection Heading (H3)</h3>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
            This is regular paragraph text using Rubik. It's clean, readable, and pairs beautifully with the Playfair Display headings. The contrast between the geometric sans-serif and elegant serif creates visual interest while maintaining excellent readability.
          </p>
          <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
            This is smaller text in muted color, perfect for captions or secondary information.
          </p>
        </div>
      </section>
    </div>
  );
}