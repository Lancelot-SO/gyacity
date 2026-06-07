import { V2 } from '@/tokens';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SecHero }        from './SecHero';
import { SecInteriors }   from './SecInteriors';
import { SecStats }       from './SecStats';
import { SecPortfolio }   from './SecPortfolio';
import { SecVisionCTA }   from './SecVisionCTA';
import { SecClients }     from './SecClients';
import { SecBelief }      from './SecBelief';
import { SecContactBand } from './SecContactBand';

export function HomePage({ accent, onNavigate }) {
  return (
    <div style={{ background: V2.bg, color: V2.cream, fontFamily: V2.font }}>
      <SecHero        accent={accent} />
      <SecInteriors   accent={accent} onNavigate={onNavigate} />
      <SecPortfolio   accent={accent} onNavigate={onNavigate} />
      <SecStats       accent={accent} />
      <SecVisionCTA   accent={accent} />
      <SecClients     accent={accent} />
      <SecBelief />
      <SecContactBand accent={accent} onNavigate={onNavigate} />
      <SiteFooter     accent={accent} onNavigate={onNavigate} />
    </div>
  );
}
