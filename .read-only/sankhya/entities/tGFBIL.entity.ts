import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TcspscEntity } from './tCSPSC.entity';

@Index('PK_TGFBIL', ['numcontrato', 'dtmov', 'codprod', 'controle'], {
  unique: true,
})
@Index('TGFBIL_I01', ['nunotafatur'], {})
@Entity('TGFBIL', { schema: 'SANKHYA' })
export class TgfbilEntity {
  @Column('int', { primary: true, name: 'NUMCONTRATO' })
  numcontrato: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('float', { name: 'QTDNEG', precision: 53 })
  qtdneg: number;

  @Column('datetime', { name: 'DTFATUR', nullable: true })
  dtfatur: Date | null;

  @Column('int', { name: 'NUNOTAFATUR', nullable: true })
  nunotafatur: number | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfbils, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUNOTAFATUR', referencedColumnName: 'nunota' }])
  nunotafatur2: TgfcabEntity;

  @ManyToOne(() => TcspscEntity, (tcspscEntity) => tcspscEntity.tgfbils)
  @JoinColumn([
    { name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tcspsc: TcspscEntity;
}
