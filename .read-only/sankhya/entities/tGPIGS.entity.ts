import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TgpgslEntity } from './tGPGSL.entity';

@Index('PK_TGPIGS', ['codgrelha', 'codclasse', 'codstep', 'seqclasse'], {
  unique: true,
})
@Entity('TGPIGS', { schema: 'SANKHYA' })
export class TgpigsEntity {
  @Column('int', { primary: true, name: 'CODGRELHA' })
  codgrelha: number;

  @Column('smallint', { primary: true, name: 'CODCLASSE' })
  codclasse: number;

  @Column('smallint', { primary: true, name: 'SEQCLASSE' })
  seqclasse: number;

  @Column('smallint', { primary: true, name: 'CODSTEP' })
  codstep: number;

  @Column('int', { name: 'PONTOS', nullable: true })
  pontos: number | null;

  @Column('float', { name: 'VLRSALARIO', nullable: true, precision: 53 })
  vlrsalario: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpigs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.tgpigs)
  @JoinColumn([{ name: 'CODCARGO', referencedColumnName: 'codcargo' }])
  codcargo: TfpcarEntity;

  @ManyToOne(() => TgpgslEntity, (tgpgslEntity) => tgpgslEntity.tgpigs)
  @JoinColumn([{ name: 'CODGRELHA', referencedColumnName: 'codgrelha' }])
  codgrelha2: TgpgslEntity;
}
