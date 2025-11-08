import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TmimetEntity } from './tMIMET.entity';

@Index('PK_TMIIND', ['codind'], { unique: true })
@Entity('TMIIND', { schema: 'SANKHYA' })
export class TmiindEntity {
  @Column('int', { primary: true, name: 'CODIND' })
  codind: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'TIPO', length: 1 })
  tipo: string;

  @Column('char', { name: 'ORIENTACAO', length: 1 })
  orientacao: string;

  @Column('varchar', { name: 'UNMEDIDA', length: 15 })
  unmedida: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('smallint', { name: 'QTDDEC', nullable: true })
  qtddec: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tmiinds)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TmimetEntity, (tmimetEntity) => tmimetEntity.codind)
  tmimets: TmimetEntity[];
}
