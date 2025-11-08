import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfvolEntity } from './tGFVOL.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfiteEntity } from './tGFITE.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFPED', ['nupesagem', 'seq'], { unique: true })
@Index('TGFPED_I01', ['nunota'], {})
@Index('TGFPED_I02', ['nunota', 'sequencia'], {})
@Entity('TGFPED', { schema: 'SANKHYA' })
export class TgfpedEntity {
  @Column('int', { primary: true, name: 'NUPESAGEM' })
  nupesagem: number;

  @Column('smallint', { primary: true, name: 'SEQ' })
  seq: number;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('varchar', { name: 'TIPO', length: 1, default: () => "'N'" })
  tipo: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'CONFERIDOENT', length: 1, default: () => "'N'" })
  conferidoent: string;

  @Column('varchar', { name: 'CONFERIDOSAI', length: 1, default: () => "'N'" })
  conferidosai: string;

  @Column('char', { name: 'DEVOLVIDO', length: 1, default: () => "'N'" })
  devolvido: string;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfpeds)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol: TgfvolEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfpeds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfpeds)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfpeds)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
