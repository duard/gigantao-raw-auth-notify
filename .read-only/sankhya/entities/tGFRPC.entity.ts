import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { TgfddcEntity } from './tGFDDC.entity';
import { TgfdpcEntity } from './tGFDPC.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFRPC', ['codpeca'], { unique: true })
@Entity('TGFRPC', { schema: 'SANKHYA' })
export class TgfrpcEntity {
  @Column('int', { primary: true, name: 'CODPECA' })
  codpeca: number;

  @Column('varchar', { name: 'DESCRICAO', length: 150 })
  descricao: string;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'A'" })
  tipo: string;

  @Column('float', { name: 'DIAMETROEXT', precision: 53 })
  diametroext: number;

  @Column('float', { name: 'DIAMETROINT', precision: 53 })
  diametroint: number;

  @Column('float', { name: 'COMPRIMENTOORELHA2', precision: 53 })
  comprimentoorelha2: number;

  @Column('float', { name: 'COMPRIMENTOORELHA1', precision: 53 })
  comprimentoorelha1: number;

  @Column('float', { name: 'COMPRIMENTO', precision: 53 })
  comprimento: number;

  @Column('float', { name: 'DIAMETROCINTA', precision: 53 })
  diametrocinta: number;

  @Column('image', { name: 'IMAGEM' })
  imagem: Buffer;

  @Column('varchar', { name: 'UNIDADE', length: 2, default: () => "'MM'" })
  unidade: string;

  @OneToMany(() => TgfddcEntity, (tgfddcEntity) => tgfddcEntity.codpeca)
  tgfddcs: TgfddcEntity[];

  @OneToMany(() => TgfdpcEntity, (tgfdpcEntity) => tgfdpcEntity.codpeca2)
  tgfdpcs: TgfdpcEntity[];

  @ManyToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfrpcs)
  @JoinTable({
    name: 'TGFPPP',
    joinColumns: [{ name: 'CODPECA', referencedColumnName: 'codpeca' }],
    inverseJoinColumns: [{ name: 'CODPROD', referencedColumnName: 'codprod' }],
    schema: 'SANKHYA',
  })
  tgfpros: TgfproEntity[];
}
