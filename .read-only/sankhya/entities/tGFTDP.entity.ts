import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfndpEntity } from './tGFNDP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFTDP', ['codtipdesc'], { unique: true })
@Entity('TGFTDP', { schema: 'SANKHYA' })
export class TgftdpEntity {
  @Column('int', { primary: true, name: 'CODTIPDESC' })
  codtipdesc: number;

  @Column('varchar', { name: 'DESCRICAO', length: 60 })
  descricao: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('int', { name: 'ORDEM', default: () => '(0)' })
  ordem: number;

  @Column('float', { name: 'PERCDESCMIN', precision: 53, default: () => '(0)' })
  percdescmin: number;

  @Column('float', { name: 'PERCDESCMAX', precision: 53, default: () => '(0)' })
  percdescmax: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(() => TgfndpEntity, (tgfndpEntity) => tgfndpEntity.codtipdesc2)
  tgfndps: TgfndpEntity[];

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgftdps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
