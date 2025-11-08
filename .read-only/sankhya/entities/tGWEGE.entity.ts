import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwgenEntity } from './tGWGEN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGWEGE', ['codgen', 'codexec'], { unique: true })
@Index('TGWEGE_I01', ['codexec'], {})
@Entity('TGWEGE', { schema: 'SANKHYA' })
export class TgwegeEntity {
  @Column('int', { primary: true, name: 'CODGEN' })
  codgen: number;

  @Column('smallint', { primary: true, name: 'CODEXEC' })
  codexec: number;

  @Column('char', { name: 'PODESEP', length: 1, default: () => "'S'" })
  podesep: string;

  @Column('char', { name: 'PODEREAB', length: 1, default: () => "'S'" })
  podereab: string;

  @Column('char', { name: 'PODEARM', length: 1, default: () => "'S'" })
  podearm: string;

  @Column('char', { name: 'PODETRANSF', length: 1, default: () => "'S'" })
  podetransf: string;

  @Column('char', { name: 'PODEINV', length: 1, default: () => "'S'" })
  podeinv: string;

  @ManyToOne(() => TgwgenEntity, (tgwgenEntity) => tgwgenEntity.tgweges)
  @JoinColumn([{ name: 'CODGEN', referencedColumnName: 'codgen' }])
  codgen2: TgwgenEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgweges)
  @JoinColumn([{ name: 'CODEXEC', referencedColumnName: 'codusu' }])
  codexec2: TsiusuEntity;
}
