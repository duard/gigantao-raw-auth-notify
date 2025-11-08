import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFINU', ['numnota', 'codemp', 'serienota', 'codmoddoc', 'dtmov'], {
  unique: true,
})
@Index(
  'TGFINU_I01',
  ['dtmov', 'codemp', 'serienota', 'codmoddoc', 'numnota'],
  {},
)
@Entity('TGFINU', { schema: 'SANKHYA' })
export class TgfinuEntity {
  @Column('int', { primary: true, name: 'NUMNOTA' })
  numnota: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', {
    primary: true,
    name: 'SERIENOTA',
    length: 3,
    default: () => "' '",
  })
  serienota: string;

  @Column('int', { primary: true, name: 'CODMODDOC', default: () => '(1)' })
  codmoddoc: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('char', { name: 'MOTIVO', length: 255 })
  motivo: string;

  @Column('char', { name: 'NUMPROTOC', nullable: true, length: 15 })
  numprotoc: string | null;

  @Column('datetime', { name: 'DHPROTOC', nullable: true })
  dhprotoc: Date | null;

  @Column('varchar', { name: 'TPAMBNFE', nullable: true, length: 1 })
  tpambnfe: string | null;

  @Column('char', { name: 'ENTSAI', length: 1, default: () => "'S'" })
  entsai: string;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfinus)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfinus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
