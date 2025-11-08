import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgfplcEntity } from './tGFPLC.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFCPE', ['nucesta', 'sequencia'], { unique: true })
@Entity('TGFCPE', { schema: 'SANKHYA' })
export class TgfcpeEntity {
  @Column('int', { primary: true, name: 'NUCESTA' })
  nucesta: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'QTDEENTREGUE', default: () => '(0)' })
  qtdeentregue: number;

  @Column('datetime', { name: 'DTENTREGA' })
  dtentrega: Date;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { name: 'CODCONTATO', nullable: true })
  codcontato: number | null;

  @Column('int', { name: 'OCREENTREGA', nullable: true })
  ocreentrega: number | null;

  @Column('int', { name: 'ORDEMCARGA', nullable: true })
  ordemcarga: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfcpes)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfplcEntity, (tgfplcEntity) => tgfplcEntity.tgfcpes)
  @JoinColumn([{ name: 'NUCESTA', referencedColumnName: 'nucesta' }])
  nucesta2: TgfplcEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcpes)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota: TgfcabEntity;
}
