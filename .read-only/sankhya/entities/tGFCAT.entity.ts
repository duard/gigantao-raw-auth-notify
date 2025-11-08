import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfscaEntity } from './tGFSCA.entity';

@Index('PK_TGFCAT', ['codcat'], { unique: true })
@Entity('TGFCAT', { schema: 'SANKHYA' })
export class TgfcatEntity {
  @Column('int', { primary: true, name: 'CODCAT' })
  codcat: number;

  @Column('varchar', { name: 'DESCRICAO', length: 40 })
  descricao: string;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTEXE', nullable: true })
  dtexe: Date | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codcat)
  tgfpros: TgfproEntity[];

  @OneToMany(() => TgfscaEntity, (tgfscaEntity) => tgfscaEntity.codcat2)
  tgfscas: TgfscaEntity[];
}
