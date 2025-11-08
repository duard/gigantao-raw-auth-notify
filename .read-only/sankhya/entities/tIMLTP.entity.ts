import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimlotEntity } from './tIMLOT.entity';
import { TsibcoEntity } from './tSIBCO.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TIMLTP', ['ltploteamento', 'ltpproprietario'], { unique: true })
@Entity('TIMLTP', { schema: 'SANKHYA' })
export class TimltpEntity {
  @Column('int', { primary: true, name: 'LTPLOTEAMENTO' })
  ltploteamento: number;

  @Column('int', { primary: true, name: 'LTPPROPRIETARIO' })
  ltpproprietario: number;

  @Column('float', {
    name: 'LTPPERCENTUAL',
    precision: 53,
    default: () => '(0)',
  })
  ltppercentual: number;

  @Column('varchar', {
    name: 'LTPFORMADEREPASSE',
    length: 2,
    default: () => "'DP'",
  })
  ltpformaderepasse: string;

  @Column('varchar', { name: 'LTPREPAGENCIA', nullable: true, length: 10 })
  ltprepagencia: string | null;

  @Column('varchar', { name: 'LTPREPCONTA', nullable: true, length: 10 })
  ltprepconta: string | null;

  @Column('char', { name: 'LTPESTAGIO', length: 1, default: () => "'A'" })
  ltpestagio: string;

  @Column('char', { name: 'LTPLEGADO', nullable: true, length: 1 })
  ltplegado: string | null;

  @ManyToOne(() => TimlotEntity, (timlotEntity) => timlotEntity.timltps)
  @JoinColumn([{ name: 'LTPLOTEAMENTO', referencedColumnName: 'lotcodigo' }])
  ltploteamento2: TimlotEntity;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.timltps)
  @JoinColumn([{ name: 'LTPREPBANCO', referencedColumnName: 'codbco' }])
  ltprepbanco: TsibcoEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timltps)
  @JoinColumn([{ name: 'LTPPROPRIETARIO', referencedColumnName: 'codparc' }])
  ltpproprietario2: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timltps2)
  @JoinColumn([{ name: 'LTPPROCURADOR', referencedColumnName: 'codparc' }])
  ltpprocurador: TgfparEntity;
}
