import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TGFEPSD', ['nuevento'], { unique: true })
@Entity('TGFEPSD', { schema: 'SANKHYA' })
export class TgfepsdEntity {
  @Column('int', { primary: true, name: 'NUEVENTO' })
  nuevento: number;

  @Column('char', { name: 'TPAMB', length: 1 })
  tpamb: string;

  @Column('datetime', { name: 'DHEVENTO' })
  dhevento: Date;

  @Column('varchar', { name: 'OBS', nullable: true, length: 255 })
  obs: string | null;

  @Column('text', { name: 'XML', nullable: true })
  xml: string | null;

  @Column('text', { name: 'XMLPROTAUT', nullable: true })
  xmlprotaut: string | null;

  @Column('text', { name: 'XMLENVCLI', nullable: true })
  xmlenvcli: string | null;

  @Column('varchar', { name: 'NUMPROTOC', nullable: true, length: 44 })
  numprotoc: string | null;

  @Column('datetime', { name: 'DHPROTOC', nullable: true })
  dhprotoc: Date | null;

  @Column('varchar', { name: 'CHAVECTE', length: 44 })
  chavecte: string;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfepsds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfepsds)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;
}
