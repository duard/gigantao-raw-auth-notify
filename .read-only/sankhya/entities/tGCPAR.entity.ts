import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGCPAR', ['codparc', 'dtcalc', 'codcred'], { unique: true })
@Entity('TGCPAR', { schema: 'SANKHYA' })
export class TgcparEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', {
    primary: true,
    name: 'DTCALC',
    default: () => 'getdate()',
  })
  dtcalc: Date;

  @Column('int', { primary: true, name: 'CODCRED' })
  codcred: number;

  @Column('float', { name: 'LIMCREDCALC', precision: 53 })
  limcredcalc: number;

  @Column('float', { name: 'LIMCREDMENSALCALC', precision: 53 })
  limcredmensalcalc: number;

  @Column('datetime', { name: 'DTEFETIVACAO', nullable: true })
  dtefetivacao: Date | null;

  @Column('float', { name: 'LIMCRED', nullable: true, precision: 53 })
  limcred: number | null;

  @Column('float', { name: 'LIMCREDMENSAL', nullable: true, precision: 53 })
  limcredmensal: number | null;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgcpars, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgcpars)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgcpars2)
  @JoinColumn([{ name: 'CODUSUCALC', referencedColumnName: 'codusu' }])
  codusucalc: TsiusuEntity;
}
