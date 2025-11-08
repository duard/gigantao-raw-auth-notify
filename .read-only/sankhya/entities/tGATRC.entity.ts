import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgangiEntity } from './tGANGI.entity';
import { TgatriEntity } from './tGATRI.entity';

@Index('PK_TGATRC', ['nutransf'], { unique: true })
@Entity('TGATRC', { schema: 'SANKHYA' })
export class TgatrcEntity {
  @Column('int', { primary: true, name: 'NUTRANSF' })
  nutransf: number;

  @Column('char', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('char', { name: 'EXIGEPESAGEM', length: 1, default: () => "'N'" })
  exigepesagem: string;

  @OneToMany(() => TgangiEntity, (tgangiEntity) => tgangiEntity.nutransf)
  tgangis: TgangiEntity[];

  @OneToMany(() => TgatriEntity, (tgatriEntity) => tgatriEntity.nutransf2)
  tgatris: TgatriEntity[];
}
