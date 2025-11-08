import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TprmpsEntity } from './tPRMPS.entity';

@Index('PK_TPRHMRP', ['numps', 'codprod', 'controle', 'seqimrp', 'dtmov'], {
  unique: true,
})
@Entity('TPRHMRP', { schema: 'SANKHYA' })
export class TprhmrpEntity {
  @Column('int', { primary: true, name: 'NUMPS' })
  numps: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { primary: true, name: 'SEQIMRP' })
  seqimrp: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('float', { name: 'QTDMOV', precision: 53, default: () => '(0)' })
  qtdmov: number;

  @Column('varchar', { name: 'CANCELADO', length: 1, default: () => "'N'" })
  cancelado: string;

  @Column('datetime', { name: 'DTCANC', nullable: true })
  dtcanc: Date | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprhmrps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tprhmrps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tprhmrps2)
  @JoinColumn([{ name: 'CODUSUCANC', referencedColumnName: 'codusu' }])
  codusucanc: TsiusuEntity;

  @ManyToOne(() => TprmpsEntity, (tprmpsEntity) => tprmpsEntity.tprhmrps)
  @JoinColumn([{ name: 'NUMPS', referencedColumnName: 'numps' }])
  numps2: TprmpsEntity;
}
