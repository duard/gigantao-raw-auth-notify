import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcstfuEntity } from './tCSTFU.entity';
import { TcsfapEntity } from './tCSFAP.entity';

@Index('PK_TCSFEQ', ['nufap', 'codusu', 'codtipfuncao'], { unique: true })
@Entity('TCSFEQ', { schema: 'SANKHYA' })
export class TcsfeqEntity {
  @Column('int', { primary: true, name: 'NUFAP' })
  nufap: number;

  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('smallint', { primary: true, name: 'CODTIPFUNCAO' })
  codtipfuncao: number;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcsfeqs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;

  @ManyToOne(() => TcstfuEntity, (tcstfuEntity) => tcstfuEntity.tcsfeqs)
  @JoinColumn([{ name: 'CODTIPFUNCAO', referencedColumnName: 'codtipfuncao' }])
  codtipfuncao2: TcstfuEntity;

  @ManyToOne(() => TcsfapEntity, (tcsfapEntity) => tcsfapEntity.tcsfeqs)
  @JoinColumn([{ name: 'NUFAP', referencedColumnName: 'nufap' }])
  nufap2: TcsfapEntity;
}
